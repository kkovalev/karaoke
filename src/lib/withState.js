import {connect} from 'react-redux';

export default function withState(Component) {
    return connect(state => ({ ...state }))(Component);
}
