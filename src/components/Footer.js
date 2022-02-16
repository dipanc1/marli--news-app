import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    Made With
                    &#10084; by
                    <a href="https://linkedin.com/in/dipan-chhabra-454520164" className="mx-1 mb-md-0 text-decoration-none" target={'_blank'} rel='noreferrer'>
                        Dipan
                    </a>
                    <span className="text-muted">{'for Marleen © ' + new Date().getFullYear()}</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://twitter.com/chhabradipan" target={'_blank'} rel='noreferrer'><img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" alt="twitter" height={25} width={25} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/dipanchhabra/" target={'_blank'} rel='noreferrer'><img src="logos/instagram.png" alt="instagram" height={25} width={25} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/dipanc1" target={'_blank'} rel='noreferrer'><img src="logos/facebook.png" alt="facebook" height={25} width={25} /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer