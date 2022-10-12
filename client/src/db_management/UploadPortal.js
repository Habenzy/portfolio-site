export default function Uploader(props) {

  let uploadEntry = (evt) => {
    evt.preventDefault()
  }
  return (
    <form onSubmit={uploadEntry}>
      <input type='file' name="image" />
      <input type="text" name="title" />
      <input type="text" name="blurb" />
      <input type="submit" />
    </form>
  )
}