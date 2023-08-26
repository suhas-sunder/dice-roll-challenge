function UserInput({ handleRoll, diceInputRef }) {
  
  const handleSubmission = (e) => {
    e.preventDefault();
    handleRoll();
  };

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor="inputNum">Number Of Dice</label>
      <input
        ref={diceInputRef}
        id="inputNum"
        type="number"
        min={0}
        max={99}
      ></input>
      <button>Roll</button>
    </form>
  );
}

export default UserInput;
