import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

// interface ContentCardDemoProps {
//     title: string;
//     link: string;
//     description: string;
// }

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        width: 400,
        margin: "auto",
        boxShadow: "none",
        borderRadius: 30,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: "initial",
    },
}));

export const ContentCardDemo = React.memo(({ title, link, description }) => {
    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const n = 6;

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardContent className={styles.content}>
                <TextInfoContent
                    classes={textCardContentStyles}
                    heading={title}
                    caption="qwe"
                    body={description}
                />
                {link ?
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button color={"primary"} fullWidth className={styles.cta}>
                            Find Out More&nbsp;<GitHubIcon />
                        </Button>
                    </a> : null}
            </CardContent>
        </Card>
    );
});

export default ContentCardDemo;
