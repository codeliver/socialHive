import { NavLink } from "react-router-dom";
import UserProfileImage from '../../assets/media/avatars/300-1.jpg';
import ContactList from "../shared/contacts/contact-list";

const Sidebar = () => {
    return (
        <div
				id="kt_aside"
				className="aside"
				data-kt-drawer="true"
				data-kt-drawer-name="aside"
				data-kt-drawer-activate="{default: true, lg: false}"
				data-kt-drawer-overlay="true"
				data-kt-drawer-width="{default:'200px', '300px': '225px'}"
				data-kt-drawer-direction="start"
				data-kt-drawer-toggle="#kt_aside_toggle"
				data-kt-sticky="true"
				data-kt-sticky-name="aside-sticky"
				data-kt-sticky-offset="{default: false, lg: '1px'}"
				data-kt-sticky-width="{lg: '225px'}"
				data-kt-sticky-left="auto"
				data-kt-sticky-top="94px"
				data-kt-sticky-animation="false"
				data-kt-sticky-zindex="95"
			>
				<div
					className="hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1"
					id="kt_aside_menu_wrapper"
					data-kt-scroll="true"
					data-kt-scroll-activate="{default: false, lg: true}"
					data-kt-scroll-height="auto"
					data-kt-scroll-dependencies="#kt_header"
					data-kt-scroll-wrappers="#kt_aside"
					data-kt-scroll-offset="5px"
				>
					<div className="menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 fs-6 menu-rounded w-100" id="#kt_aside_menu" data-kt-menu="true">
						<div className="menu-item">
							<div className="menu-content pb-5">{/* <span className="menu-section text-muted text-uppercase fs-7 fw-bold">Public</span> */}</div>
						</div>
						<div className="menu-item">
							<NavLink to="/" className="menu-link">
								<i className="ki-solid ki-home fs-2 me-4"></i>
								<span className="menu-title">Feed</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/a" className="menu-link">
								<i className="ki-solid ki-category fs-2 me-4"></i>
								<span className="menu-title">Explore</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/b" className="menu-link">
								<i className="ki-solid ki-shop fs-2 me-4"></i>
								<span className="menu-title">Market Place</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/c" className="menu-link">
								<i className="ki-solid ki-people fs-2 me-4"></i>
								<span className="menu-title">Groups</span>
								<span class="menu-badge">5</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/c" className="menu-link">
								<i className="ki-solid ki-archive-tick fs-2 me-4"></i>
								<span className="menu-title">My Favorites</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/c" className="menu-link">
								<i className="ki-solid ki-send fs-2 me-4"></i>
								<span className="menu-title">Message</span>
								<span class="menu-badge">1K</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/c" className="menu-link">
								<i className="ki-solid ki-setting-2 fs-2 me-4"></i>
								<span className="menu-title">Settings</span>
								<span class="menu-badge">2</span>
							</NavLink>
						</div>
						<div className="menu-item">
							<NavLink to="/account/login" className="menu-link">
								<i className="ki-solid ki-exit-left fs-2 me-4"></i>
								<span className="menu-title">Logout</span>
							</NavLink>
						</div>
						<div className="separator my-5"></div>
						<div className="menu-item">
							<div className="menu-content pb-4">
								<span className="menu-section text-muted text-uppercase fs-7 fw-bold">Contacts</span>
							</div>
						</div>
						<div className="menu-item">
							<div className="card bg-transparent border-0 ps-4">
								<ContactList />
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}

export default Sidebar;