package main

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"

	_ "github.com/lib/pq"

	"fmt"
	"log"
)

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

func getUsersHandler(db *sql.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		// Your handler code goes in here - e.g.
		rows, err := db.Query("SELECT * FROM users")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		users := []User{}

		for rows.Next() {
			var u User
			err = rows.Scan(&u.ID, &u.FirstName, &u.LastName, &u.Email)
			if err != nil {
				log.Fatal(err)
			} else {
				users = append(users, u)
			}
		}

		c.JSON(http.StatusOK, users)
	}

	return gin.HandlerFunc(fn)
}

func main() {
	connStr := "postgresql://postgres:1234@postgres-db:5432/studentswhositdb?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("connected to database")
	}
	router := gin.Default()
	router.GET("/users", getUsersHandler(db))
	router.Run("0.0.0.0:5000")
	fmt.Println("running on port 5000")
}
