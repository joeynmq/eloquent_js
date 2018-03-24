
/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let n="";

for (let i = 1; i <= 7; i++)
{	
	for (let j = 0; j < i; j++)
	{	
		n += "#";
	}
	n += "\n";
}

console.log(n);

