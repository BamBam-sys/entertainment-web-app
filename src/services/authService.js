// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { loading, userAuthenticated } from "../store/userSlice";
// import { useNavigate } from 'react-router-dom';

// const dispatch = useDispatch()
// const navigate = useNavigate()

// export const registerUser = async ()=>{
//     dispatch(loading(true));
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       dispatch(userAuthenticated({ email: user.email, userId: user.uid }));
//       dispatch(loading(false));
//       navigate('/');
//     } catch (error) {
//       alert(error.message);
//       dispatch(loading(false));
//     }
// }
