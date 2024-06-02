import GoogleLogo from '../../../assets/media/svg/brand-logos/google-icon.svg';
import AppleLogo from '../../../assets/media/svg/brand-logos/apple-black.svg';
import AppleLogoDark from '../../../assets/media/svg/brand-logos/apple-black-dark.svg';
import SocialHiveLogo from '../../../assets/media/socialhiveLogo.png';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {

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
                        <form class="form w-100" noValidate="novalidate" id="kt_sign_up_form" action="#">
								<div class="text-center mb-11">
									<h1 class="text-gray-900 fw-bolder mb-3">Sign Up</h1>
									<div class="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
								</div>
								<div class="row g-3 mb-9">
									<div class="col-md-6">
										<a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src={GoogleLogo} class="h-15px me-3" />Sign in with Google</a>
									</div>
									<div class="col-md-6">
										<a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src={AppleLogo} class="theme-light-show h-15px me-3" />
										<img alt="Logo" src={AppleLogoDark} class="theme-dark-show h-15px me-3" />Sign in with Apple</a>
									</div>
								</div>
								<div class="separator separator-content my-14">
									<span class="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
								</div>
								<div class="fv-row mb-8">
									<input type="text" placeholder="Email" name="email" autocomplete="off" class="form-control bg-transparent" />
								</div>
								<div class="fv-row mb-8" data-kt-password-meter="true">
									<div class="mb-1">
										<div class="position-relative mb-3">
											<input class="form-control bg-transparent" type="password" placeholder="Password" name="password" autocomplete="off" />
											<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
												<i class="ki-duotone ki-eye-slash fs-2"></i>
												<i class="ki-duotone ki-eye fs-2 d-none"></i>
											</span>
										</div>
										<div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
											<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
										</div>
									</div>
									<div class="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
								</div>
								<div class="fv-row mb-8">
									<input placeholder="Repeat Password" name="confirm-password" type="password" autocomplete="off" class="form-control bg-transparent" />
								</div>
								<div class="fv-row mb-8">
									<label class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" name="toc" value="1" />
										<span class="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the 
										<a href="#" class="ms-1 link-primary">Terms</a></span>
									</label>
								</div>
								<div class="d-grid mb-10">
									<button onClick={() => {navigate("/account/login")}} id="kt_sign_up_submit" class="btn btn-primary">
										<span class="indicator-label">Sign up</span>
										<span class="indicator-progress">Please wait... 
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
								</div>
								<div class="text-gray-500 text-center fw-semibold fs-6">Already have an Account? 
								<Link to="/account/login" class="link-primary fw-semibold"> Sign in</Link></div>
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

export default SignupPage;