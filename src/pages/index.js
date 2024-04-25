export default function Index({ ip }) {
    console.log(ip);

    return (
        <div>{ip}</div>
    )
}

export const getServerSideProps = (async context => {
    const forwarded = context.req.headers['x-forwarded-for'];
    const ip = forwarded
        ? forwarded.split(/, /)[0]
        : context.req.socket.remoteAddress;

    return {
        props: {
            ip,
        },
    };
});
