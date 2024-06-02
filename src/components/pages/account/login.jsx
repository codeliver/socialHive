import GoogleLogo from '../../../assets/media/svg/brand-logos/google-icon.svg';
import AppleLogo from '../../../assets/media/svg/brand-logos/apple-black.svg';
import AppleLogoDark from '../../../assets/media/svg/brand-logos/apple-black-dark.svg';
import SocialHiveLogo from '../../../assets/media/socialhiveLogo.png';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

	const navigate = useNavigate();

    return (
        <div className="d-flex flex-column flex-root">
			{/* <style>body { background-image: url('assets/media/auth/bg4.jpg'); } [data-bs-theme="dark"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }</style> */}
			<div className="d-flex flex-column flex-column-fluid flex-lg-row">
				<div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
					<div className="d-flex flex-center flex-lg-start flex-column">
						<Link to='/' className="mb-7">
							<img alt="Logo" src={SocialHiveLogo} />
						</Link>
						<h2 className="text-white fw-normal m-0 mx-auto">Join the Hive, Share the Buzz!</h2>
					</div>
				</div>
				<div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
					<div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
						<div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
							<form className="form w-100" noValidate="novalidate" id="kt_sign_in_form">
								<div className="text-center mb-11">
									<h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
									<div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
								</div>
								<div className="row g-3 mb-9">
									<div className="col-md-6">
										<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src={GoogleLogo} className="h-15px me-3" />Sign in with Google</a>
									</div>
									<div className="col-md-6">
										<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src={AppleLogo} className="theme-light-show h-15px me-3" />
										<img alt="Logo" src={AppleLogoDark} className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
									</div>
								</div>
								<div className="separator separator-content my-14">
									<span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
								</div>
								<div className="fv-row mb-8">
									<input type="text" placeholder="Email" name="email" autocomplete="off" className="form-control bg-transparent" />
								</div>
								<div className="fv-row mb-3">
									<input type="password" placeholder="Password" name="password" autocomplete="off" className="form-control bg-transparent" />
								</div>
								<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
									<div></div>
									<a href="#" className="link-primary">Forgot Password ?</a>
								</div>
								<div className="d-grid mb-10">
									<button onClick={() => {navigate("/")}} id="kt_sign_in_submit" className="btn btn-primary">
										<span className="indicator-label">Sign In</span>
										<span className="indicator-progress">Please wait... 
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
								</div>
								<div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet? 
								<Link to="/account/signup" className="link-primary"> Sign up</Link></div>
							</form>
						</div>
						<div className="d-flex flex-stack px-lg-10 mx-auto">
							<div className="d-flex fw-semibold text-primary fs-base gap-5">
								<a href="#" target="_blank">Terms</a>
								<a href="#" target="_blank">Plans</a>
								<a href="#" target="_blank">Contact Us</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default LoginPage;