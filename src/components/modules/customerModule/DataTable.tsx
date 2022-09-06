import React, {useState} from "react";
// the wanted syntax for the api call from the database
// import Api from "../../../utils/Api";

export default function DataTable() {

    // adjust width as needed for each row
    const headings = [
        { name: "FirstName", width: "10%" },
        { name: "lastName", width: "10%" },
        { name: "Number", width: "10%" },
        { name: "Address", width: "20%" },
        { name: "Return reminder", width: "10%" },
        {name: "Appointments", width: "20%"}
    ];

    // This would be replaced with data from the database
    const users = [
        {firstName: "Sinbad", lastName: "Morpheus", phoneNumber: "(562)669-6969", address: "3639 Canyon Peak Rd. Bakersfield, C.A. 93307", reminder: "5 days", appointments: [
                    "Sinbad's First", "Second Appointment", "Third Appointment"
                ]},
                {firstName: "Tiffany", lastName: "Mahone", phoneNumber: "(555) 555-5555", address: "1010 Can Ave Norwalk, CA 90650", reminder: "2 weeks", appointments: [
                    "Sinbad's First", "Second Appointment", "Third Appointment"
                ]},
                {firstName: "Lana", lastName: "Del Ray", phoneNumber: "(123) 456-7890", address: "2020 Barlon Way Seattle, WA 99969", reminder: "4 weeks", appointments: [
                    "Sinbad's First", "Second Appointment", "Third Appointment"
                ]},
                {firstName: "Michael", lastName: "Scott", phoneNumber: "(909) 868-5858", address: "9090 Banana Ham Tittle, Ca 90650", reminder: "1 week", appointments: [
                    "Sinbad's First", "Second Appointment", "Third Appointment"
                ]},
                {firstName: "Ham", lastName: "Rocket", phoneNumber: "(567)789-9090", address: "6969 Baste Rd Rest, CA 66669", reminder: "3 days", appointments: [
                    "Sinbad's First", "Second Appointment", "Third Appointment"
                ]}
    ];

    return(
        <>
        <table>
        <thead>
          <tr>
            {/* taking in the const headings and mapping it for each of the heading key pairs. */}
           {headings.map(({ name, width }) => {
              return (
                <th
                  key={name}
                  style={{ width }}
                >
                  {name}

                </th>
              );
            })}  
          </tr>
        </thead>

        <tbody>
            {/* as of right now the data hard coded eventually it will display the 
                data that is bein returned from the database */}
            {users.map(({firstName, lastName, phoneNumber, address, reminder, appointments}) => {
                return(
                   <tr key={firstName}>
                        <td data-th="firstName">
                            {firstName}
                        </td>
                        <td data-th="lastName">
                            {lastName}
                        </td>
                        <td data-th="phoneNumber">
                            {phoneNumber}
                        </td>
                        <td data-th="address">
                            {address}
                        </td>
                        <td data-th="reminder">
                            {reminder}
                        </td>
                        <td data-th="appointments">
                            {`${appointments[0]} ${appointments[1]} ${appointments[2]}`}
                        </td>
                   </tr>
                );
            })}
        </tbody>
      </table>
        </>
    )
}