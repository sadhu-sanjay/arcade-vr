
type GridItemProps = {
    children: React.ReactNode;
    className: string;
};

export const GridItem2: React.FC<GridItemProps> = ({ children, className }) => {
    
    const onClick = () => {
        console.log('clicked');
    }

    return (
        <Flex className={className} onClick={onClick}>
            {children}
        </Flex>
    )

}

type FlexProps = {
    children: React.ReactNode;
    className: string;
};

export const Flex = (props: FlexProps) => {

    const { children, ...rest } = props;
    return <div className={"flex"} {...rest}>{children}</div>;

};

