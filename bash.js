process.stdout.write('prompt > ');


process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    if (cmd === 'pwd'){
    console.log(process.cwd());
    }
    
    process.stdout.write('\nprompt > ');
})