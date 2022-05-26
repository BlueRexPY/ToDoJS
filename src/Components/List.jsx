import React from 'react'
import ListItem from './ListItem'
import PropTypes from "prop-types";

const List = props => {
    const filterListDataItem = props.filterListData.map((item)=>{
        return(   
            <ListItem onDeleted={() => props.onDeleted(item.id)} onToggleImportent={() => props.onToggleImportent(item.id)} onToggleDone={() => props.onToggleDone(item.id)} key={item.id} {...item}> </ListItem>
        )
    })
    return (
        <ul className="list-group">
            {filterListDataItem}
        </ul>
    )
}

List.propTypes = {
    filterListData: PropTypes.array,
}

export default List