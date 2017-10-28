<section id="signup" class="wrapper style2">
  <div class="inner">
    <h4>Contact Information</h4>
    <form method="post" action="subscribe.php">
      <div class="row uniform">
        <div class="6u 12u$(xsmall)">
          <input type="text" name="fname" id="fname" value="" placeholder="First Name" />
        </div>
        <div class="6u$ 12u$(xsmall)">
          <input type="text" name="lname" id="lname" value="" placeholder="Last Name" />
        </div>
        <div class="12u$">
          <input type="email" name="email" id="email" value="" placeholder="Email" />
        </div>
        <div class="12u$">
          <input type="text" name="phone" id="phone" value="" placeholder="Contact Number" />
        </div>
        <div class="12u$">
          <div class="select-wrapper">
            <select name="memberships" id="memberships">
                      <option value="">- Membership Option -</option>
                      <option value="B4L">Bomber for Life</option>
                      <option value="Family">Family Membership</option>
                      <option value="U25">U-25 &amp; Student Membership</option>
                      <option value="STM">Regular Season Tickets</option>
                    </select>
          </div>
        </div>
        <div class="12u$">
          <h5>Call me back on...</h5>
        </div>
        <div class="3u 12u$(small)">
          <div class="select-wrapper">
            <select id="call-year" name="call-year" onchange="generateMonths()" required>
                         <option value="">Select Year</option>
                     </select>
          </div>
        </div>
        <div class="3u 12u$(small)">
          <div class="select-wrapper">
            <select id="call-month" name="call-month" onchange="runDays()" required disabled>
                    <option value="">Select Month</option>
                </select>
          </div>
        </div>
        <div class="3u 12u$(small)">
          <div class="select-wrapper">
            <select id="call-day" name="call-day" onchange="runTime()" required disabled>
                   <option value="">Select Day</option>
                </select>
          </div>
        </div>
        <div class="3u 12u$(small)">
          <div class="select-wrapper">
            <select name="call-time" id="call-time" onchange="updateTime()" required disabled>
                      <option value="">Select Time</option>
                    </select>
          </div>

        </div>
        <div class="12u$">
          <h5>Preferred Seat Level</h5>
          <div class="select-wrapper">
            <select name="seating" id="seating">
                      <option value="">- Select Seat level -</option>
                      <option value="P1-100">Lower Bowl - P1 - 100 Level</option>
                      <option value="P2-100">Lower Bowl - P2 - 100 Level</option>
                      <option value="P3-100">Lower Bowl - P3 - 100 Level</option>
                      <option value="P4-100">Lower Bowl - P4 - 100 Level</option>
                      <option value="P5-100">Lower Bowl - P5 - 100 Level</option>
                      <option value="FF-100">Lower Bowl - FF - 100 Level</option>
                      <option value="P3-200">Upper Bowl - P3 - 200 Level</option>
                      <option value="P4-200">Upper Bowl - P4 - 200 Level</option>
                      <option value="P6-200">Upper Bowl - P6 - 200 Level</option>
                      <option value="P7-200">Upper Bowl - P7 - 200 Level</option>
                    </select>

          </div>
        </div>
  <!--
        <div class="12u$">
          <input type="checkbox" id="newsletter" name="newsletter">
          <label for="newsletter">Sign Up for Blue Bomber news and promotions</label>
          <div class="g-recaptcha" data-sitekey="6Le1iC8UAAAAAJKfekdmXjP7-9rCRa2Zu2gpSAXR"></div>
        </div>
-->
        <div class="12u$">
          <ul class="actions">
            <li><input type="submit" value="Send Message" class="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</section>
