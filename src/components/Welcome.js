import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import background from '../Sfondo.jpeg';

function Welcome() {

    const alertStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'top',
    };
    return (
        <Container>
        <Alert  style={alertStyle} className='text-white text-center'>      
            <Alert.Heading className='mb-5 ms-5'> Benvenuti in EpiBooks!<span className='fs-6 ms-2 fst-italic'>
            “I libri sono gli amici più tranquilli e costanti, e gli insegnanti più pazienti.”- Charles W. Eliot
            </span></Alert.Heading>
        </Alert>
        </Container>
    );
}

export default Welcome;