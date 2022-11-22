export default function ContactPage() {
  return (
    <div class="form-container">
      <h2 class="form-title">Contact Us</h2>
      <form
        action=""
        class="checkout-form"
        name="messageForm"
        onsubmit={""}
      >
        <div class="input-line">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your
                name and surname"
          />
        </div>

        <div class="input-line">
          <label for="name">Email</label>
          <input
            type="text"
            name="email"
            id="name"
            placeholder="Your
                Email Address"
          />
        </div>
        <div class="input-container">
          <div class="input-line">
            <label for="name">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="name"
              placeholder="(977) 980 12345678"
            />
          </div>

          <div class="input-line">
            <label for="name">Location</label>
            <input list="Location" name="location" />
            <datalist id="Location">
              <option value="Kathmandu" />
              <option value="Lalitpur" />
              <option value="Bhaktapur" />
              <option value="Lahan" />
            </datalist>
          </div>
        </div>
        <div class="input-container">
          <div class="input-line">
            <label for="name"> Gender </label>
            <input type="radio" id="html" name="gender" value="HTML" />
            <label for="html">Male</label>
            <input type="radio" id="css" name="gender" value="CSS" />
            <label for="css">Female</label>
          </div>
          <div class="input-line">
            <label for="name"> Location </label>
            <input
              type="text"
              name="location"
              id="name"
              placeholder="Koteshwor"
            />
          </div>
        </div>
        <div class="input-container">
          <div class="input-line">
            <label for="name">Postal Code</label>
            <input type="text" name="name" id="name" placeholder="44600" />
          </div>
          <div class="input-line">
            <label for="name">Country</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nepal or Others"
            />
          </div>
        </div>
        <div>
          <textarea
            class="input"
            name="text"
            id=""
            cols="60"
            rows="5"
            placeholder="Enter your Description
                                Here...."
          ></textarea>
        </div>

        <input
          type="submit"
          class="button"
          value="Complete purchase"
          background-color="grey"
          padding="5px"
          color="white"
          border-radius="8px"
        />
      </form>
    </div>
  );
}
