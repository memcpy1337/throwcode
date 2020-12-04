import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPageThunkCreator, updateCodeAC, updateCodeModeAC } from '../../../../redux/reducers/descriptionPage';
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
    render() {
        return (
            <ProblemDescription description={this.props.description} codeArea={this.props.codeArea} onUpdateCode={this.onUpdateCode.bind(this)} onUpdateCodeMode={this.onChangeCodeMode.bind(this)} />
        )
    }

}


let mapStateToProps = (state) => {
    return {
        description: state.descriptionPage.descriptionBlock,
        codeArea: state.descriptionPage.codeArea
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
        setPage: (id) => dispatch(setPageThunkCreator(id))
    }
}
let withUrlData = withRouter(ProblemDescriptionContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlData);