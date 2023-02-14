import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import {useState} from "react";
import useAppContext from "../../utils/hooks/useAppContext";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Signing: React.FC = () => {

    const {setSigningOpen, openSigning} = useAppContext();
    const handleModalClose = () => setSigningOpen(false);

    const [formType, setFormType] = useState<"signIn" | "signUp">("signIn");

    return (
        <div>
            <Modal
                open={openSigning}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {formType === "signIn" && <SignInForm onOpenSignUp={() => setFormType("signUp")} />}
                    {formType === "signUp" && <SignUpForm onOpenSignIn={() => setFormType("signIn")} />}
                </Box>
            </Modal>
        </div>
    );
};

export default Signing;