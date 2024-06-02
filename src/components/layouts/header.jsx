import { Link } from "react-router-dom";
import SocialHive from '../../assets/media/socialhiveLogo.png';
import UserProfileImage from '../../assets/media/avatars/300-1.jpg';

const Header = () => {
    return (
        <div id="kt_header" className="header align-items-stretch">
            <div className="container-xxl d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5">
                    <div className="btn btn-icon btn-active-icon-primary ms-n2 me-2 d-flex d-lg-none" id="kt_aside_toggle">
                        <i className="ki-duotone ki-abstract-14 fs-1">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </div>
                    <Link to="/">
						<img alt="Logo" src={SocialHive} className="d-none d-lg-inline h-30px theme-light-show" />
						<img alt="Logo" src={SocialHive} className="d-none d-lg-inline h-30px theme-dark-show" />
						<img alt="Logo" src={SocialHive} className="d-lg-none h-25px" />
				    </Link>
                </div>

                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    <div className="d-flex align-items-stretch" id="kt_header_nav">
                        <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                            <div className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-500 align-items-stretch my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6" id="#kt_header_menu" data-kt-menu="true">
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-stretch flex-shrink-0">
                        <div className="d-flex align-items-center ms-1 ms-lg-2">
							<div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_activities_toggle">
								<i className="ki-duotone ki-chart-simple fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
									<span className="path3"></span>
									<span className="path4"></span>
								</i>
							</div>
                            <div className="d-flex align-items-center ms-1 ms-lg-2">
									<div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
										<i className="ki-duotone ki-message-text-2 fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
										<span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
									</div>
							</div>
                            <div className="d-flex align-items-center ms-1 ms-lg-2">
									<a href="#" className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-duotone ki-night-day theme-light-show fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
											<span className="path5"></span>
											<span className="path6"></span>
											<span className="path7"></span>
											<span className="path8"></span>
											<span className="path9"></span>
											<span className="path10"></span>
										</i>
										<i className="ki-duotone ki-moon theme-dark-show fs-1">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</a>
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-night-day fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
														<span className="path7"></span>
														<span className="path8"></span>
														<span className="path9"></span>
														<span className="path10"></span>
													</i>
												</span>
												<span className="menu-title">Light</span>
											</a>
										</div>
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-moon fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
												<span className="menu-title">Dark</span>
											</a>
										</div>
										<div className="menu-item px-3 my-0">
											<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
												<span className="menu-icon" data-kt-element="icon">
													<i className="ki-duotone ki-screen fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
													</i>
												</span>
												<span className="menu-title">System</span>
											</a>
										</div>
									</div>
							</div>
                            <div className="d-flex align-items-center ms-lg-5" id="kt_header_user_menu_toggle">
									<div className="btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3" data-kt-menu-trigger={{default: 'click', lg: 'hover'}} data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2">
											<span className="text-muted fs-7 fw-semibold lh-1 mb-2">Hello</span>
											<span className="text-gray-900 fs-base fw-bold lh-1">Richard</span>
										</div>
										<div className="symbol symbol-30px symbol-md-40px">
											<img src={UserProfileImage} alt="image" />
										</div>
									</div>
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
										<div className="menu-item px-3">
											<div className="menu-content d-flex align-items-center px-3">
												<div className="symbol symbol-50px me-5">
													<img alt="Logo" src={UserProfileImage} />
												</div>
												<div className="d-flex flex-column">
													<div className="fw-bold d-flex align-items-center fs-5">Max Smith 
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
													<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
												</div>
											</div>
										</div>
										<div className="separator my-2"></div>
										<div className="menu-item px-5">
											<a href="account/overview.html" className="menu-link px-5">My Profile</a>
										</div>
										<div className="menu-item px-5">
											<a href="apps/projects/list.html" className="menu-link px-5">
												<span className="menu-text">My Projects</span>
												<span className="menu-badge">
													<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
											</a>
										</div>
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title">My Subscription</span>
												<span className="menu-arrow"></span>
											</a>
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												<div className="menu-item px-3">
													<a href="account/referrals.html" className="menu-link px-5">Referrals</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/billing.html" className="menu-link px-5">Billing</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/statements.html" className="menu-link px-5">Payments</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements 
													<span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
														<i className="ki-duotone ki-information-5 fs-5">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
													</span></a>
												</div>
												<div className="separator my-2"></div>
												<div className="menu-item px-3">
													<div className="menu-content px-3">
														<label className="form-check form-switch form-check-custom form-check-solid">
															<input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
															<span className="form-check-label text-muted fs-7">Notifications</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="menu-item px-5">
											<a href="account/statements.html" className="menu-link px-5">My Statements</a>
										</div>
										<div className="separator my-2"></div>
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Language 
												<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English 
												<img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
											</a>
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5 active">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
													</span>English</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
													</span>German</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
												</div>
												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
													</span>French</a>
												</div>
											</div>
										</div>
										<div className="menu-item px-5 my-1">
											<a href="account/settings.html" className="menu-link px-5">Account Settings</a>
										</div>
										<div className="menu-item px-5">
											<a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
										</div>
									</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;