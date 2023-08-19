// our-domain.com/AboutUs
import Link from 'next/link';

function AboutUsPage() {

    return (
        <div>
            <h1>About Us</h1>
            <ul>
                {details.map(dev => (
                    <li key={dev.id}>
                        <Link href={`/about/${dev.id}`}>
                            <a>{dev.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutUsPage;