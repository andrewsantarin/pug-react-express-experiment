import * as shell from 'shelljs';

shell.cp('-R', 'src/public/favicons', 'dist/public/favicons');
shell.cp('-R', 'src/public/img', 'dist/public/img');
