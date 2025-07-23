export type THandleExchange = ({
  sourceToken,
  targetToken,
  sourceTokenAmount,
  targetTokenAmount
}: {
  sourceToken: string;
  targetToken: string;
  sourceTokenAmount: number;
  targetTokenAmount: number;
}) => Promise<void>;
