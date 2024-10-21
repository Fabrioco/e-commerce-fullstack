export const Notification = ({
  message,
  type,
}: {
  message: string;
  type: string;
}) => {
  return (
    <div className={`notification ${type}`}>
      <div className="content__notification">
        <p>{message}</p>
        <div className="loadBar">
          <div className="loadBarComplete">
            <div
              className={
                type == "success"
                  ? "loadingBarSuccess"
                  : "loadingBarError"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
