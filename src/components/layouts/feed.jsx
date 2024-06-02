import Loadz from '../../assets/media/misc/spinner.gif';
import Image from '../../assets/media/misc/preview-3.jpg';

const Feeds = () => {

    const imageBack = {
        backgroundImage : `url('https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg')`
    }

    return (
        <div>
            <div class="mb-0">
                <div class="d-flex flex-stack flex-wrap mb-4">
                    <div class="d-flex align-items-center py-1">
                        <div class="symbol symbol-35px me-2">
                            <div class="symbol-label bg-light-success fs-3 fw-semibold text-success text-uppercase">J</div>
                        </div>
                        <div class="d-flex flex-column align-items-start justify-content-center">
                            <span class="text-gray-900 fs-7 fw-semibold lh-1 mb-2">James Hunt</span>
                            <span class="text-muted fs-8 fw-semibold lh-1">24 minutes ago</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center py-1">
                        <a href="#" class="btn btn-sm btn-light-primary px-4 me-2"><i class="ki-outline ki-heart"></i> Follow</a>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-4">
                    <a href="apps/devs/question.html" class="fs-2 fw-bold text-gray-900 text-hover-primary me-1">How to use Metronic with Django Framework ?</a>
                    <div class="d-flex align-items-center">
                        <span class="ms-1" data-bs-toggle="tooltip" title="New question">
                            <i class="ki-duotone ki-information-5 text-primary fs-1">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                            </i>
                        </span>
                        <span class="ms-1" data-bs-toggle="tooltip" title="User replied">
                            <i class="ki-duotone ki-sms text-danger fs-1">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                        </span>
                    </div>
                </div>
                <div class="fs-base fw-normal text-gray-700 mb-4">I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</div>
                <div class="d-flex flex-center h-350px mb-4">
                    <a class="d-block overlay" data-fslightbox="lightbox-basic" href={Image}>
                        <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                            style={imageBack}>
                        </div>
                        <div class="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                            <i class="bi bi-eye-fill text-white fs-3x"></i>
                        </div>
                    </a>
                </div>
                <div class="d-flex flex-stack flex-wrap">
                    <div class="d-flex align-items-center py-1 gap-3">
                        <div class="symbol-group symbol-hover">
                            <div class="symbol symbol-circle symbol-25px me-1">
                                <div class="symbol-label fs-2 fw-semibold bg-primary"><i class="ki-solid ki-like text-white"></i></div>
                            </div>
                            <div class="symbol symbol-circle symbol-25px">
                                <div class="symbol-label fs-2 fw-semibold bg-danger"><i class="ki-solid ki-heart text-white"></i></div>
                            </div>
                        </div>
                        <span class="text-gray-700 fs-6 fw-semibold lh-1">1K comments</span>
                        <span class="text-gray-700 fs-6 fw-semibold lh-1">34 shares</span>
                    </div>
                    <div class="d-flex align-items-center py-1">
                        <a href="#" class="btn btn-sm btn-light px-4 me-2"><i class="ki-outline ki-like"></i> Like</a>
                        <a href="#" class="btn btn-sm btn-light px-4 me-2"><i class="ki-outline ki-message-text-2"></i> Comment</a>
                        <a href="#" class="btn btn-sm btn-flex btn-light px-3"><i class="ki-outline ki-arrows-loop"></i> Share</a>
                    </div>
                </div>
            </div>
            <div class="separator separator-dashed border-gray-300 my-8"></div>
        </div>

    );
};

export default Feeds;