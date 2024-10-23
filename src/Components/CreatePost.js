import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './../Style/CreatePost.css';

function CreatePost () {

    return(
        <div className='createpost-section '>
<Form.Control type="text" placeholder="Normal text" className='search-input' />
<Button className='btn-danger'>Post</Button>
</div>
    )


}

export default CreatePost