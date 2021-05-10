import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <div className="footer">
        <h5>&copy; Darien Bryant </h5>
      </div>
    </div>
  );
}
export default Footer;

// <div>
//   landng page
//   <MissionStatement>
//     <div>We’re on a mission to streamline access to recovery</div>
//   </MissionStatement>
//   <Tagline>
//     <div>If we can make your job easier, we are doing our job well.</div>
//   </Tagline>
//   <PatientAdvocates>
//     <div>Patient Advocates</div>
//   </PatientAdvocates>
//   <RehabFacilities>
//     <div>Rehab Facilities</div>
//   </RehabFacilities>
//   <BlueBackground>
//     <div></div>

//     <AccountDetailsBox>
//       <div></div>
//       <AccountDetailsLogo>
//         <div>
//           <img />
//         </div>
//       </AccountDetailsLogo>
//       <div></div>
//       <AccountDetailsHeader>
//         <div>Enter your account details</div>
//       </AccountDetailsHeader>
//       <Email>
//         <div>Email</div>
//       </Email>
//       <Password>
//         <div>Password</div>
//       </Password>
//       <CheckBox>
//         <div></div>
//       </CheckBox>
//       <RememberLogin>
//         <div>Remember login details</div>
//       </RememberLogin>
//       <ForgotPassword>
//         <div>Forgot password?</div>
//       </ForgotPassword>

//       <SignInBox>
//         <div>SIGN IN</div>
//       </SignInBox>
//       <SignUp>
//         <div>Don’t have an account? Sign up instead</div>
//       </SignUp>
//     </AccountDetailsBox>
//   </BlueBackground>
// </div>;

// const BlueBackground = styled.div`
//   position: absolute;
//   width: 640px;
//   height: 720px;
//   left: 640px;
//   top: 0px;

//   /* Main 3 */

//   background: #172d55;
//   backdrop-filter: blur(20px);
// `;

// const AccountDetailsBox = styled.div`
//   position: absolute;
//   width: 385px;
//   height: 326px;
//   left: 1123px;
//   top: 159px;

//   /* Main 1 */

//   background: #f5f5f5;
//   border-radius: 5px;
//   transform: rotate(90deg);
// `;

// const AccountDetailsLogo = styled.div`
//   position: absolute;
//   left: 1.08%;
//   right: 10.11%;
//   top: 21.91%;
//   bottom: 25.61%;

//   background: #008da5;
// `;

// const AccountDetailsHeader = styled.div`
//   position: absolute;
//   left: 68.67%;
//   right: 14.77%;
//   top: 29.44%;
//   bottom: 66.81%;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 17px;
//   display: flex;
//   align-items: center;

//   color: #000000;
// `;

// const Email = styled.div`
//   position: absolute;
//   left: 64.84%;
//   right: 14.77%;
//   top: 35.14%;
//   bottom: 59.03%;

//   background: #ffffff;
//   border: 1px solid #ebebeb;
//   box-sizing: border-box;
//   border-radius: 5px;
// `;

// const Password = styled.div`
//   position: absolute;
//   left: 64.84%;
//   right: 14.77%;
//   top: 41.53%;
//   bottom: 52.64%;

//   background: #ffffff;
//   border: 1px solid #ebebeb;
//   box-sizing: border-box;
//   border-radius: 5px;
// `;

// const ForgotPassword = styled.div`
//   position: absolute;
//   left: 78.2%;
//   right: 14.77%;
//   top: 50%;
//   bottom: 48.33%;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 12px;

//   /* Accent 2 */

//   color: #5c9ad6;
// `;

// const RememberLogin = styled.div`
//   position: absolute;
//   left: 67.03%;
//   right: 23.2%;
//   top: 50%;
//   bottom: 47.78%;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 12px;

//   color: #000000;
// `;

// const CheckBox = styled.div`
//   position: absolute;
//   left: 26.67%;
//   right: 26.66%;
//   top: 33.33%;
//   bottom: 33.33%;

//   /* Gray 6 */

//   border: 1px solid #f2f2f2;
// `;

// const SignInBox = styled.div`
//   position: absolute;
//   left: 64.84%;
//   right: 14.77%;
//   top: 58.33%;
//   bottom: 36.81%;

//   /* Accent 12 */

//   background: #f28b3d;
//   box-shadow: 0px 4px 25px 5px rgba(0, 0, 0, 0.05);
//   border-radius: 5px;
// `;

// const SignUp = styled.div`
//   position: absolute;
//   left: 62.27%;
//   right: 12.27%;
//   top: 65.14%;
//   bottom: 31.53%;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 12px;
//   line-height: 15px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   /* Accent 2 */

//   color: #5c9ad6;
// `;

// const MissionStatement = styled.div`
//   position: absolute;
//   left: 5.7%;
//   right: 65.78%;
//   top: 18.75%;
//   bottom: 64.86%;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 30px;
//   line-height: 42px;
//   /* or 140% */

//   color: #111111;
// `;

// const Tagline = styled.div`
//   position: absolute;
//   left: 5.7%;
//   right: 68.52%;
//   top: 39.58%;
//   bottom: 51.94%;

//   font-family: Source Sans Pro;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 20px;
//   line-height: 28px;
//   /* or 140% */

//   color: #4f4f4f;
// `;

// const PatientAdvocates = styled.div`
//   position: absolute;
//   width: 424px;
//   height: 70px;
//   left: 73px;
//   top: 395px;

//   /* Accent 2 */

//   background: #5c9ad6;
//   backdrop-filter: blur(5px);
//   /* Note: backdrop-filter has minimal browser support */

//   border-radius: 5px;
// `;

// const RehabFacilities = styled.div`
//   position: absolute;
//   width: 424px;
//   height: 70px;
//   left: 73px;
//   top: 497px;

//   /* Accent 11 */

//   background: #f4b387;
//   backdrop-filter: blur(5px);
//   /* Note: backdrop-filter has minimal browser support */

//   border-radius: 5px;
// `;
