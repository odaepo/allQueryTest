const initialState = {
    0: {
        id: 0,
        name: 'Root',
        subtext: 'Some subtext',
        fileType: '',
        childIds: [1, 2]
    },
    1: {
        id: 1,
        name: 'Child',
        subtext: 'Child subtext',
        fileType: 'png',
        childIds: [3]
    },
    2: {
        id: 2,
        name: 'Child2',
        subtext: 'Child subtext',
        fileType: 'png',
        childIds: []
    },
    3: {
        id: 3,
        name: 'GrandChild',
        subtext: 'Child subtext',
        fileType: 'png',
        childIds: []
    }
}

/*
 * How is the next application state calculated,
 * given the current state and the action?
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


class Material extends React.Component {

    constructor(props) {
        super(props)
        this.renderChild = this.renderChild.bind(this)
        this.getNestedItems = this.getNestedItems.bind(this)
    }

    // This is where I am having trouble.
    // Shouldn't the props be accessible from state itself?

    renderChild = (id, childId) => (
        <MaterialContainer key={childId}  id={childId} />
    )

    getNestedItems = (id, childIds) => {
        var childItems = []
        for(var i=0; i < childIds.length; i++){
            var child = this.renderChild(id, childIds[i])
            childItems.push(child)
        }
        return childItems
    }

    render(){
        let childItems = []
        if(this.props.childIds){
            childItems = this.getNestedItems(this.props.id, this.props.childIds)
        }

        return (
            <div>
                <h4>{this.props.name}</h4>
                <div style={{paddingLeft: '15px'}}>{childItems}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        name: state[ownProps.id].name,
        subtext: state[ownProps.id].subtext,
        childIds: state[ownProps.id].childIds,
        fileType: state[ownProps.id].fileType,
    }
}



/*
 * Let's create a container component
 * that injects props into the pure UI component
 * according to the instructions above, but
 * instead of all those props, accepts a store.
 */
const { connect, Provider } = ReactRedux;
const MaterialContainer = connect(
    mapStateToProps
)(Material);


/*
 * Let's create a store.
 */
const { createStore } = Redux;
const store = createStore(reducer);


/*
 * Finally, render the container,
 * passing the store to it.
 */
ReactDOM.render(
    <Provider store={store}>
        <MaterialContainer id={0} />
    </Provider>,
    document.getElementById('root')
);