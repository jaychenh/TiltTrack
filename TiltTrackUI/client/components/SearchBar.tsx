import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar() {
    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Summoner Name" variant="outlined" />
            </Box>
        </>
    )
}

export default SearchBar;