import styled from "styled-components";
import useForm from './loginForm';
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
        email: '',
        password: ''
    };

    const [formData, handleChange, resetForm] = useForm(initialFormValues);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        resetForm();
    }

  return (
    <>
      <Navbar currentPage={"login"} />
      <FlexColumnCenter>

        <FlexRowCenter>
            <SubHeader>Welcome Back!</SubHeader>
        </FlexRowCenter>
        <FlexColumnCenter>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </FlexColumnCenter>
    </FlexColumnCenter>
    </>
  );
};

export { View };
