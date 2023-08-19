// our-domain.com/AboutUs
import Link from 'next/link';

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutUsPage() {

    return (
        <div>
            <h1>About Us</h1>
            <ul>
                {details.map(dev => (
                    <li key={dev.id}>
                        <Link href={`/about/${dev.id}`}>
                            {dev.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutUsPage;