import { Box, Heading } from 'grommet'
import React from 'react'
import Separator from './Separator'

import theme from '../../theme'

import PictureProfile from './PictureProfile'
import Social from './Social'

const imageProfileUrl = require('../../static/images/profiles/stiegler.jpg')

const Sidenav: React.FC = () => {
    return (
        <Box direction="column">
            <Box width="xmedium">
                <Box direction="column">
                    <Box direction="column">
                        <PictureProfile imageUrl={imageProfileUrl} />
                        <Heading
                            level={1}
                            color="dark-1"
                            margin={{ top: '16px', bottom: '0px' }}
                        >
                            Hello,
                        </Heading>
                        <Heading
                            level={2}
                            size="large"
                            color="dark-1"
                            margin={{ vertical: '0px' }}
                        >
                            I'm Vincent
                        </Heading>
                    </Box>
                </Box>
                <Box
                    direction="column"
                    margin={{ top: '40px', bottom: '10px' }}
                >
                    <Separator color={theme.global.colors.brand} />
                </Box>
                <Heading level={3} size="large" color="dark-1">
                    I like building things.
                    <br />
                    My primary job function is as a software engineer.
                    <br />I care about how technology can support well-being and
                    global challenges.
                </Heading>
                <Social />
            </Box>
        </Box>
    )
}

export default Sidenav