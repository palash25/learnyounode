// Step 2 Add cmd args

cmd_args = process.argv;
s = 0;

for (i=2; i<cmd_args.length; i++) {
	s += Number(cmd_args[i]);
}

console.log(s);
