import CustomInput from '../customInput/CustomInput';
import './pdv.scss';
import AddNoteIssueForm from "../AddNoteIssueForm/AddNoteIssueForm";
import PdvForm from '../PdvForm/PdvForm';

export const Pdv = () => {
    return(
        <div className="Pdv">

            <div className="pdvContainer">
                <h4>PDV</h4>
                <div className="AddCategoryForm">
                    <PdvForm />
                </div>
            </div>
            
        </div>
    )
}