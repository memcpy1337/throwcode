import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitProblem } from '../../../../api/requests';
import { setPageThunkCreator, updateCodeAC, updateCodeModeAC, toogleAuthorisedErrorAC, codeSubmitThunkCreator } from '../../../../redux/reducers/descriptionPage';
import ProblemDescription from './ProblemDescription';

class ProblemDescriptionContainer extends React.Component {

    constructor(props) {
        super(props);
        debugger;
    }
    componentDidMount() {
        this.props.setPage(this.props.match.params.id);
    }
    onUpdateCode(code) {
        this.props.updateCode(code);
    }
    onChangeCodeMode(mode) {
        this.props.updateCodeMode(mode);
    }
    notAuthorisedErrorToogle(toogle) {
        this.props.notAuthorisedError(toogle);
    }
    codeSubmit() {
        if(!this.props.isAuth) {
            return this.props.notAuthorisedError(true);
        }
        this.props.tryCodeSubmit(this.props.description.id, this.props.codeArea.codeMode, this.props.codeArea.code);
    }
    render() {
        return (
            <ProblemDescription description={this.props.description}
             codeArea={this.props.codeArea}
              onUpdateCode={this.onUpdateCode.bind(this)}
               onUpdateCodeMode={this.onChangeCodeMode.bind(this)}
                codeSubmit={this.codeSubmit.bind(this)}
                  notAuthError={this.props.notAuthError}
                  codeSubmitResult={this.props.codeSubmitResult}
                  notAuthErrorToogle={this.notAuthorisedErrorToogle.bind(this)} />
        )
    }


}


let mapStateToProps = (state) => {
    return {
        description: state.descriptionPage.descriptionBlock,
        codeArea: state.descriptionPage.codeArea,
        isAuth: state.authPage.isAuth,
        codeSubmitResult: state.descriptionPage.codeSumbitResult,
        notAuthError: state.descriptionPage.notAuthorisedError
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateCode: (code) => {
            dispatch(updateCodeAC(code));
        },
        updateCodeMode: (code) => {
            dispatch(updateCodeModeAC(code));
        },
        setPage: (id) => dispatch(setPageThunkCreator(id)),
        notAuthorisedError: (toogle) => {
            dispatch(toogleAuthorisedErrorAC(toogle));
        },
        tryCodeSubmit: (id, lang, code) => dispatch(codeSubmitThunkCreator(id, lang, code))
    }
}
let withUrlData = withRouter(ProblemDescriptionContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlData);