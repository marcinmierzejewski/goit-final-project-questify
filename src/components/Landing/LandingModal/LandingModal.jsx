import { DarkBg, Wrapper, Modal, CloseBtn } from "./LandingModal.styled";
import { IoMdClose } from "react-icons/io";
import { useRegisterMutation } from "../../../redux/slices/questifyAPI";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import validationSchema from "../../../schemas/formValidation";

const LandingModal = ({ setIsOpen }) => {
	const [register] = useRegisterMutation();

	const { handleSubmit, values, handleChange, touched, errors, resetForm } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: validationSchema,
			onSubmit: async (values) => {
				await register(values)
					.unwrap()
					.then(({ id }) => {
						resetForm();
						setIsOpen(false);
						toast.success("Now you can use your credentials to login");
					})
					.catch(() => {
						toast.warn(`User with ${values.email} already exists`);
					});
			},
		});
	return (
		<>
			<DarkBg onClick={() => setIsOpen(false)} />
			<Wrapper>
				<Modal>
					<CloseBtn onClick={() => setIsOpen(false)}>
						<IoMdClose />
					</CloseBtn>
					<form onSubmit={handleSubmit}>
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
							Register!
						</Button>
					</form>
				</Modal>
			</Wrapper>
		</>
	);
};

export default LandingModal;
