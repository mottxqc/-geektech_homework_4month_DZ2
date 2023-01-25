import navBtns from '../navBtn/navBtn'

const listOfButtons = [
  {
    id: 100,
    text: 'big mouses',
  },
  {
    id: 101,
    text: 'small mouses',
  },
  {
    id: 102,
    text: 'headphones',
  },
]

function navBtns() {
  return (
    <ul>
      {listOfButtons.map((buttonsElement) => {
        return (
          <navBtn
            text={buttonsElement.text}
            key={buttonsElement.id}
          />
        )
      })}
    </ul>
  )
}

export default navBtns