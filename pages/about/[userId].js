// our-domain.com/AboutUs/developer
import { useRouter } from 'next/router'


const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'},
];

function DeveloperDetailsPage() {
    const router = useRouter();
    const userId = parseInt(router.query.userId);

    const developer = details.find(dev => dev.id === userId);

    if(!developer){
        return <p>Developer doesn't exist</p>
    }

    return(
        <div>
            <h1>Name:- {developer.name}</h1>
            <p>Role:- {developer.role}</p>
        </div>
    )
}

export default DeveloperDetailsPage;