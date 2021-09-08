/* eslint-disable jsx-a11y/alt-text */
import { skills, experiences,projects, blogs } from "../profile";
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"




export default function Home() {
    return (
        <>
        {/* Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src="/img.jpg"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8">
                            <h1>César Torres</h1>
                            <h3>FullStack Developer</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit obcaecati, minima eius officiis voluptatem beatae? Est ad quasi accusamus magni, harum quas cum enim consequuntur debitis reprehenderit expedita perspiciatis eveniet.</p>
                            <a href="#" className="btn btn-back d-block">
                                <span><FontAwesomeIcon icon={faWhatsapp} /></span> Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        {/* Second section */}
        <div>
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="container title">
                        <h2>Experience</h2>
                    </div>
                </div>
            </div>
        </div>

        {/* Second section */}
        <div className="row py-2">
            
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">

                        <ul>
                            {
                                experiences.map(({title,descripcion,from, to}, i) => (
                                    <li key={i}>
                                        <h4>{title}</h4>
                                        <h5>{from}-{to}</h5>
                                        <p>{descripcion}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h4>Skills</h4>

                        {
                            skills.map(({skill, percentage},i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{width: `${percentage}%`}}
                                        ></div>
                                    </div>
                                </div>
                                    
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* Second section */}
        <div>
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="container title">
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* Proyectos */}
        <div className="row">
            <div className="col-md-12 py-2">
                <div className="card card-body bg-light">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                        {
                            projects.map(({name, description, image}, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                        <img src={`/${image}`} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <a href="#">Ver más</a>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


        {/* Second section */}
        <div>
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="container title">
                        <h2>Blog</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* BLOG */}
        <div className="row">
            <div className="col-md-12 py-2">
                <div className="card card-body bg-light">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                        {
                            blogs.map(({name, description, images}, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                        <img src={`/${images}`} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/blog">
                            <a className="btn btn-outline-light">Ver más</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
