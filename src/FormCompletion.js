import "./FormCompletion.css";

const FormCompletion = ({ formCompletionButtonHandler }) => {
    return (
        <div className="form-completion">
            <div className="form-completion-background">
                <div className="form-completion-text">
                    <h2>Form submitted!</h2>
                </div>
                <div className="form-completion-return">
                    <button
                        className="form-completion-button"
                        onClick={formCompletionButtonHandler}
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormCompletion;
