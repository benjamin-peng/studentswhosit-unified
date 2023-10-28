import styled from "styled-components";
import signUpForm from './signUpForm';
import { FlexColumnCenter } from "../../Components/Container/FlexColumnCenter";
import { FlexRowCenter } from "../../Components/Container/FlexRowCenter";
import { Navbar } from "../../Components/Navbar/Navbar";

const Header = styled.h1`
  font-size: 4em;
`;

const SubHeader = styled.h2`
  font-size: 2em;
`;

const View: React.FC = () => {
    const initialFormValues = {
        username: '',
        firstname: '',
        lastname: '',
        age: '',
        school: '',
        email: '',
        password: ''
    };

    const [formData, handleChange, resetForm] = signUpForm(initialFormValues);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        resetForm();
    }

  return (
    <>
      <Navbar currentPage={"signup"} />
      <FlexColumnCenter>
        <FlexRowCenter>
            <SubHeader>Sign Up Today!</SubHeader>
        </FlexRowCenter>
        <FlexColumnCenter>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="text" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>School:</label>
                    <input type="text" name="school" value={formData.school} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </>
  );
};

export { View };
