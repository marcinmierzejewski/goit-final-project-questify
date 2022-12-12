import { useState } from "react";
import { useLoginMutation } from "../../../redux/slices/questifyAPI";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import validationSchema from "../../../schemas/formValidation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../../redux/slices/tokenSlice";
import { addUser } from "../../../redux/slices/userSlice";
import LandingModal from "../LandingModal/LandingModal";
import {
	Wrapper,
	TextFieldStyled,
	RegistrationLInk,
	FormButton,
	Paragraph,
} from "./LandingForm.styled";

const LandingForm = () => {
	const [login] = useLoginMutation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const { handleSubmit, values, handleChange, touched, errors, resetForm } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: validationSchema,
			onSubmit: async (values) => {
				await login(values)
					.unwrap()
					.then(({ accessToken, userData: { email, id, cards } }) => {
						Cookies.set("token", accessToken);
						if (accessToken) {
							dispatch(addUser({ email, id, cards }));
						}
					})
					.catch(() => {
						toast.warn("Please check your email address or password");
					});
				const token = Cookies.get("token");
				if (token === undefined) {
					return;
				}
				dispatch(addToken(token));
				navigate("/");
				resetForm();
			},
		});

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<Paragraph>
					Choose your name to{" "}
					<RegistrationLInk onClick={() => setIsOpen(true)}>
						sing up
					</RegistrationLInk>
					{" "}or log in
				</Paragraph>
				<TextFieldStyled
					fullWidth
					variant="standard"
					margin="dense"
					id="email"
					name="email"
					label="Email"
					value={values.email}
					onChange={handleChange}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
				/>
				<TextFieldStyled
					fullWidth
					variant="standard"
					margin="dense"
					id="password"
					name="password"
					label="Password"
					type="password"
					value={values.password}
					onChange={handleChange}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
				/>
				<FormButton color="primary" variant="contained" fullWidth type="submit">
					go!
				</FormButton>
			</form>
			{isOpen && <LandingModal setIsOpen={setIsOpen} />}
		</Wrapper>
	);
};

export default LandingForm;
