import { bindActionCreators } from 'redux';

export default function(toBind){
    return function(dispatch){
        return bindActionCreators(
            toBind,
            dispatch
        )
    }
}
