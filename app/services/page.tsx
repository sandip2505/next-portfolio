
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Contact1 from "@/components/sections/Contact1"
import Static1 from "@/components/sections/Static1"

export default function Services() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-service-list pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Services
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Transforming Ideas
											<span className="text-300">into Intuitive Designs for</span>
											Engaging User
											<span className="text-300">Experiences</span>
										</h3>
										<p className="text-300 fs-5">
											With expertise in mobile app and web design, I transform ideas into visually <br />
											stunning and user-friendly interfaces that captivate and retain users. <br />
											Explore my work and see design in action.
										</p>
									</div>
									<div className="card-scroll mt-8">
										<div className="cards">
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">UI/UX Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-1.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																User Research
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Conducting thorough user research through surveys, interviews, and usability studies to understand target audiences and their needs, ensuring designs are user-centric and effective.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Wireframing and Prototyping
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Designing detailed wireframes and interactive prototypes to visualize and test user flows and interactions, allowing for early feedback and iterative improvements.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																User Testing
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing comprehensive user testing sessions to gather feedback, identify pain points, and make data-driven design improvements, ensuring a seamless user experience.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Mobile App Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-2.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Cross-Platform Design
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Creating designs that work smoothly on both iOS and Android platforms, ensuring a consistent and high-quality user experience regardless of the device.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Interactive Prototypes
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Developing interactive prototypes to demonstrate app functionality allowing stakeholders to experience the app before development begins.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Consistent Branding
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Ensuring the app design is consistent with your brand’s identity and aesthetics, maintaining brand recognition and trust across all touchpoints.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Brand Identity Design</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-3.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Logo Design
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Creating memorable and impactful logos that represent your brand’s essence and values, helping you stand out in a crowded marketplace.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Brand Guidelines
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Developing comprehensive brand guidelines that include typography, color visual styles to maintain consistency across all platforms and media.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Visual Assets:
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Designing a variety of visual assets, including business cards, letterheads, to ensure all brand communications are professional and cohesive.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card-custom" data-index={0}>
												<div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">
													<div className="card__title d-flex align-items-center mb-md-4 mb-3">
														<Link href="/#" className="card_title_link">
															<h3 className="fw-semibold mb-2">Web Development</h3>
															<p className="mb-0">Creative. Unique. Reality. </p>
														</Link>
														<Link href="/#" className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<div className="card__image-container zoom-img position-relative">
														<img className="card__image" src="/assets/imgs/services-list/img-4.png" alt="" />
														<Link href="/#" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
													</div>
													<div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Front-End Development
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Utilizing modern technologies like HTML, CSS, and JavaScript to create responsive and interactive web pages that provide an engaging user experience.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Back-End Development
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Implementing server-side logic and database management with technologies such as Node.js, Python, or Ruby on Rails to ensure seamless performance and data integrity.
															</p>
														</div>
														<div className="d-md-flex content">
															<p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block">
																Content Management Systems
															</p>
															<p className="card__description text-300 fs-6 mb-0">
																Integrating user-friendly CMS platforms like WordPress, Drupal, or custom solutions for easy content updates, allowing non-technical users to manage website content efficiently.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					<Static1></Static1>
					{/* Contact 1*/}
					<Contact1></Contact1>
				</div>

			</Layout>
			
		</>
	)
}