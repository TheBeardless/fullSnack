import "regenerator-runtime/runtime";
import Swal from "sweetalert2";

// import forms
import snackForm from "./js/snack/snackForm";
import registerForm from "./js/user/registerForm";
import loginForm from "./js/user/loginForm";

// build page
// $("body").prepend(snackForm());
$("body").prepend(loginForm());
// $("body").prepend(registerForm());
