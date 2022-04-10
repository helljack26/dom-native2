import IMAGES from '@/res/images'
import React from 'react';

const { CollectionIcon, DocIcon, PdfIcon, ComplainIcon } = IMAGES;

import { styles } from './styles.js'
const {
    Container,
    Container_block,
    Container_block_btn,
    Container_block_btn_text,
    Complain,
    Complain_link,
    Complain_link_text,

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
            <Complain>
                {/* TODO сделать ссылка на пожаловаться */}
                <Complain_link>
                    <ComplainIcon width='14px' />
                    <Complain_link_text>Пожаловаться</Complain_link_text>
                </Complain_link>
            </Complain>
        </>
    )
}

export default CardSaveButton;