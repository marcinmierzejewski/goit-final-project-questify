import { useLoginMutation } from "../../redux/slices/questifyAPI";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import validationSchema from "../../schemas";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../redux/slices/tokenSlice";
import { addUser } from "../../redux/slices/userSlice";

const LandingForm = () => {
	const [login] = useLoginMutation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
		<div>
			<form onSubmit={handleSubmit}>
				<p>Choose your name to sign up or log in</p>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={values.email}
					onChange={handleChange}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={values.password}
					onChange={handleChange}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					go!
				</Button>
			</form>
		</div>
	);
};

export default LandingForm;
