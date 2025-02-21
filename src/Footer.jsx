import './footer.css'
function Footer(){
    return(
        <>
        <footer>
            <div className="fcontainer">
                <section>
                    <ul><li className='tlist'>Support</li>
                        <li>Help centre</li>
                        <li>Cancellation option</li>
                        <li>Disability support</li>
                        <li>Report neighbourhood concern</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li className='tlist'>Contact</li>
                        <li>+91 9876543210</li>
                        <li>contact@stayhouse.com</li>
                        <li>Address</li>
                        <li>@stayhouse</li>
                    </ul>
                </section>
                <section>
                    <ul>
                    <li className='tlist'>About Us</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>New features</li>
                        <li>Hosting sources</li>
                    </ul>
                </section>
            </div>
        </footer>
        </>
    )
}


export default Footer