const initialState = {
  name: 'Suren',
  surename: 'Atoyan',
  age: 23
};

fetch('/testApi')
  .then(
    (res) => res.json()
  )
  .then(
    (data) => {
      console.log('Log ::: Data from \'/testApi\' ::: ', data)
    }
  )
  .catch(
    (rej) => {
      console.log('Log ::: The Fetch Promise \'Reject\' ::: ', rej)
    }
  )

export default function userstate(state = initialState) {
  return state;
}