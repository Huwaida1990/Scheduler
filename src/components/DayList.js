import React from "react"
import DayListItem from "./DayListItem"

export default function DayList(props) {

  const dayListArray = () => {
    const listItems = []

    props.days.map((elemnt) => {
      listItems.push(
        <DayListItem
          key={elemnt.id}
          name={elemnt.name}
          spots={elemnt.spots}
          selected={elemnt.name === props.value}
          setDay={props.setDay}
        />
      )
    })
    return listItems
  }

  return (
    <ul>
      {dayListArray()}
    </ul>
  )
}