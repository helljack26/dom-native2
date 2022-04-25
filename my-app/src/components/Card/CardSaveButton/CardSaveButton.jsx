import React from 'react';

import IMAGES from '@/res/images'
import ComplainLink from '@/components/Buttons/ComplainLink/ComplainLink';

import { styles } from './styles.js'

const { CollectionIcon, DocIcon, PdfIcon } = IMAGES;
const {
    Container,
    Container_block,
    Container_block_btn,
    Container_block_btn_text,
} = styles;

const CardSaveButton = () => {
    return (
        <>
            <Container>
                <Container_block>

                    <Container_block_btn>
                        <Container_block_btn_text>
                            В подборку
                        </Container_block_btn_text>
                        <CollectionIcon width='16px' />
                    </Container_block_btn>

                    <Container_block_btn>
                        <Container_block_btn_text>в DOC</Container_block_btn_text>
                        <DocIcon width='14px' />
                    </Container_block_btn>

                    <Container_block_btn>
                        <Container_block_btn_text>в PDF</Container_block_btn_text>
                        <PdfIcon width='14px' />
                    </Container_block_btn>

                </Container_block>
            </Container>

            {/* Complain link */}
            <ComplainLink />
        </>
    )
}

export default CardSaveButton;