import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from 'next/link'

const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            {/* <h1>hi from bd</h1> */}
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='logo'
                onClick={() => setIsDrawerOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='250px' textAlign='center' role='presantation'>
                    <IconButton
                        size='large'
                        edge='end'
                        alignItems="right"
                        color='inherit'
                        aria-label='logo'
                        onClick={() => setIsDrawerOpen(false)}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant='h6' component='div'> Bird Survey </Typography>

                    {/* sidebar button */}

                    <nav aria-label="main mailbox folders">
                        <List>
                            <Link href="InputForm">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Register Birds Information" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link href="/DisplayInformation">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Display Birds Information" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link href="/DisplayDashboard">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Display Dashboard" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </nav>

                </Box>
            </Drawer>
        </>
    )
}

export default Sidebar