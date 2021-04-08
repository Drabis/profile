// createTeam function -> accepts team

	// createManager function -> accepts a Manager object -< returns the HTML template string for a manager card

	// createEngineer function -> accepts an Engineer object -< returns the HTML template string for an engineer card

	// createIntern function -> accepts an Intern object -< returns the HTML template string for an intern card

	// map over the team object
			// on each member, call the getRole() method to find out ehat type of employee it is
			// for 'Manager' call generateManager, for 'Engineer' call generateEngineer, for 'Intern' call generateIntern
	// call the .join() array method on the result to turn it into a big string
	// team.map().join("")

	// return the result of this operation

// function to generate the basic structure of the page -> accept team parameter
	// doctyp, html, head, body, basic body structure (header, main)
	// call createTeam(team) function in the proper place

// export this last function
